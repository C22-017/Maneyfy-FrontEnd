import CONFIG from '../../../globals/config';
import Dompet from '../../../services/api/dompet';
import { getElement, getAllElement } from '../../element';
import { getDataLocalStorage, saveDataToLocalStorage } from '../../local-storage-utils';

const KelolaDompetInitiator = {
  init({
    dataUser, dompetUser, selectedDompet, iconDompets,
  }) {
    this._dataUser = dataUser;
    this._dompetUser = dompetUser;
    this._selectedDompet = selectedDompet;
    this._iconDompets = iconDompets;

    this._showDompetList();
    this._showIconDompet();
  },

  _showDompetList() {
    try {
      // Create component item Dompet
      const elementDompetList = getElement('#list-wallet');
      elementDompetList.innerHTML = '';
      this._dompetUser.forEach((dompet) => {
        const dompetItemKelola = document.createElement('item-wallet-kelola');
        dompetItemKelola.dataDompet = dompet;
        elementDompetList.appendChild(dompetItemKelola);
      });

      this._setupButtonTambahDompet()

      this._setupButtonEditDompet();

      this._setupButtonDeleteDompet();
    } catch (error) {
      console.log(error);
    }
  },

  _setupButtonTambahDompet() {
    getElement('.add-dompet').addEventListener('click', () => {
      const elementsIconSelected = getAllElement('.icon-user-selected-tambah');
      elementsIconSelected.forEach((element) => {
        if (element.getAttribute('alt') === 'pilih icon dompet') {
          element.id = 'iconDompetUser';

          if (element.id === 'iconDompetUser') {
            element.src = CONFIG.IMAGE_LOGO_PATH;
          }

          this._tambahDompetProcess(element);
        }
      });
    });
  },


  _tambahDompetProcess(element) {
    getElement('#btnTambahDompet').addEventListener('click', async () => {
      const nameDompet = getElement('#inputNameDompetTambah').value;

      if (nameDompet === '') {
        alert('Nama Dompet harus diisi');
        return false;
      }

      let idIcon;
      if (element.id === 'iconDompetUser') {
        idIcon = 1;
      } else {
        idIcon = parseInt(element.id.split('-')[1], 10);
      }

      const responseTambahDompet = await Dompet.createDompet(idIcon, nameDompet);

      if (responseTambahDompet.status === 'success') {
        alert('Dompet berhasil dibuat');
        location.reload();
      } else {
        alert(responseTambahDompet.msg);
      }
    });
  },

  _setupButtonEditDompet() {
    // Set data Dompet to field
    getAllElement('button[name="btnIconEditDompet"]').forEach((element) => {
      element.addEventListener('click', async () => {
        const buttonId = parseInt(element.id.split('-')[1], 10); // ('editDompet-#')
        const dataDompet = await Dompet.getDataDompetById(buttonId);

        const elementBodyEditDompet = getElement('body-edit-dompet');
        elementBodyEditDompet.dataDompet = dataDompet.result;

        this._editDompetProcess();
      });
    });
  },

  _editDompetProcess() {
    // save data Dompet to server
    getAllElement('button[name="btnEditDompet"]').forEach((element) => {

      element.addEventListener('click', async () => {
        const elementIconSelected = getAllElement('.icon-user-selected-edit');

        elementIconSelected.forEach(async (elementIcon) => {
          if (elementIcon.getAttribute('alt') === 'pilih icon dompet') {
            const idDompet = parseInt(element.id.split('-')[1], 10); // ('btnEditDompet-#')

            const idIcon = parseInt(elementIcon.id.split('-')[1], 10);
            const nameDompet = getElement('#inputNameDompetEdit').value;

            const data = {
              icDompetId: idIcon,
              categoryNameDompet: nameDompet,
            };

            const responseEditDompet = await Dompet.updateDompetById(idDompet, data);

            if (responseEditDompet.msg === 'Data updated successfully') {
              alert('Dompet berhasil diubah');
              location.reload();
            } else {
              alert(responseEditDompet.msg);
            }
          }
        });
      });
    });
  },

  _setupButtonDeleteDompet() {
    getAllElement('button[name="btnIconDeleteDompet"]').forEach(async (element) => {
      // Check if dompet count < 2
      const dompets = await Dompet.getAllDompet();
      if (dompets.data.length === 1) {
        element.setAttribute('disabled', '');
      }
      element.addEventListener('click', async () => {
        const buttonId = parseInt(element.id.split('-')[1], 10); // ('deleteDompet-#')
        const dataDompet = await Dompet.getDataDompetById(buttonId);

        const elementBodyDeleteDompet = getElement('body-delete-dompet');
        elementBodyDeleteDompet.dataDompet = dataDompet.result;

        this._deleteDompetProcess(dompets);
      });
    });
  },

  _deleteDompetProcess(dompets) {
    getAllElement('button[name="btnDeleteDompet"]').forEach((element1) => {
      element1.addEventListener('click', async () => {
        const idDompet = parseInt(element1.id.split('-')[1], 10); // ('btnDeleteDompet-#')
        const dataDompet1 = await Dompet.deleteDompet(idDompet);
        const newDompets = await Dompet.getAllDompet();

        // Check if dompet will remove is dompet saved in localstorage ([0])
        if (getDataLocalStorage().dompet_id === idDompet) {
          saveDataToLocalStorage(newDompets.data[0].id, getDataLocalStorage().token);
        }

        if (dataDompet1.msg === 'Dompet berhasil dihapus') {
          alert('Dompet berhasil dihapus');
          location.reload();
        } else {
          alert(dataDompet1.msg);
        }
      });
    });
  },

  _showIconDompet() {
    // Create List Icon
    const elementIconDompetList = getAllElement('.list-icon-dompet');
    elementIconDompetList.forEach((element) => {
      this._iconDompets.forEach((iconDompet) => {
        const itemIconDompet = document.createElement('item-icon');
        itemIconDompet.dataIcon = iconDompet;
        itemIconDompet.classList.add('m-1');
        element.appendChild(itemIconDompet);
      });
    });

    // Add Event Listener for Item Icon
    getAllElement('.icon-select').forEach((element) => {
      element.addEventListener('click', async () => {
        if (element === document.activeElement) {
          const idIcon = parseInt(element.id.split('-')[1], 10); // ('icon-#')

          // Get Value from Attribute Modal for selection button Pilih Icon 
          getAllElement('.btnChooseIconDompet').forEach((element) => {
            element.addEventListener('click', () => {
              const valueModalTarget = element.getAttribute('data-bs-target')
              if (valueModalTarget === '#tambahDompet') {
                this._setNewIconTambah(idIcon);
              } else if (valueModalTarget === '#editDompet') {
                this._setNewIconEdit(idIcon);
              }
            });
          });
        }
      });
    });
  },

  _setNewIconEdit(id) {
    this._iconDompets.forEach((iconDompet) => {
      if (iconDompet.id === id) {
        const iconUserSelected = getAllElement('.icon-user-selected-edit');
        iconUserSelected.forEach((element) => {
          if (element.getAttribute('alt') === 'pilih icon dompet') {
            element.src = iconDompet.url_icDompet;
            element.id = `iconDompetUserEdit-${iconDompet.id}`;
          }
        });
      }
    });
  },

  _setNewIconTambah(id) {
    this._iconDompets.forEach((iconDompet) => {
      if (iconDompet.id === id) {
        const iconUserSelected = getAllElement('.icon-user-selected-tambah');
        iconUserSelected.forEach((element) => {
          if (element.getAttribute('alt') === 'pilih icon dompet') {
            element.src = iconDompet.url_icDompet;
            element.id = `iconDompetUserTambah-${iconDompet.id}`;
          }
        });
      }
    });
  },
};

export default KelolaDompetInitiator;
