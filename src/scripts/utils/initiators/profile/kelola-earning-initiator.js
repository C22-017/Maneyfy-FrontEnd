import CONFIG from '../../../globals/config';
import CategoryEarning from '../../../services/api/categoryEarning';
import { getElement, getAllElement } from '../../element';
import { showLoading, hideLoading } from '../spinner-initiator';

const KelolaEarningInitiator = {
  init({
    dataUser, categoryEarnings, iconEarnings,
  }) {
    this._dataUser = dataUser;
    this._categoryEarnings = categoryEarnings;
    this._iconEarnings = iconEarnings;

    this._showCategoryEarningList();
    this._showIconEarning();
  },

  _showCategoryEarningList() {
    try {
      // Create component item Category Earning
      const elementEarningList = getElement('#list-category-earning');
      elementEarningList.innerHTML = '';
      this._categoryEarnings.forEach((earning) => {
        const earningItemKelola = document.createElement('item-earning-kelola');
        earningItemKelola.dataCategoryEarning = earning;
        elementEarningList.appendChild(earningItemKelola);
      });

      this._setupButtonTambahEarning()

      this._setupButtonEditEarning();

      this._setupButtonDeleteEarning();
    } catch (error) {
      console.log(error);
    }
  },

  _setupButtonTambahEarning() {
    getElement('.add-earning').addEventListener('click', () => {
      const elementsIconSelected = getAllElement('.icon-user-selected-tambah');
      elementsIconSelected.forEach((element) => {
        if (element.getAttribute('alt') === 'pilih icon earning') {
          element.id = 'iconEarningUser';

          if (element.id === 'iconEarningUser') {
            element.src = CONFIG.IMAGE_LOGO_PATH;
          }

          this._tambahEarningProcess(element);
        }
      });
    });
  },


  _tambahEarningProcess(element) {
    getElement('#btnTambahEarning').addEventListener('click', async () => {
      const nameEarning = getElement('#inputNameEarningTambah').value;

      if (nameEarning === '') {
        alert('Nama kategori pemasukan harus diisi');
        return false;
      }

      let idIcon;
      if (element.id === 'iconEarningUser') {
        idIcon = 1;
      } else {
        idIcon = parseInt(element.id.split('-')[1], 10);
      }

      const data = {
        icEarningId: idIcon,
        categoryNameEarning: nameEarning,
      };

      showLoading();
      const responseTambahEarning = await CategoryEarning.createCategoryEarning(data);
      hideLoading();

      if (responseTambahEarning.status === 'success') {
        alert('Kategori Pemasukan berhasil dibuat');
        location.reload();
      } else {
        alert(responseTambahEarning.msg);
      }
    });
  },

  _setupButtonEditEarning() {
    // Set data Earning to field
    getAllElement('button[name="btnIconEditEarning"]').forEach((element) => {
      element.addEventListener('click', async () => {
        const buttonId = parseInt(element.id.split('-')[1], 10); // ('editEarning-#')

        showLoading();
        const dataEarning = await CategoryEarning.getCategoryEarningById(buttonId);

        const elementBodyEditEarning = getElement('body-edit-earning');
        elementBodyEditEarning.dataCategoryEarning = dataEarning.result;
        hideLoading();

        this._editEarningProcess();
      });
    });
  },

  _editEarningProcess() {
    // save data Earning to server
    getAllElement('button[name="btnEditEarning"]').forEach((element) => {

      element.addEventListener('click', async () => {
        const elementIconSelected = getAllElement('.icon-user-selected-edit');

        elementIconSelected.forEach(async (elementIcon) => {
          if (elementIcon.getAttribute('alt') === 'pilih icon earning') {
            const idCategoryEarning = parseInt(element.id.split('-')[1], 10); // ('btnEditEarning-#')

            const idIcon = parseInt(elementIcon.id.split('-')[1], 10);
            const nameEarning = getElement('#inputNameEarningEdit').value;

            if (nameEarning === '') {
              alert('Nama kategori pemasukan harus diisi');
              return false;
            }

            const data = {
              icEarningId: idIcon,
              categoryNameEarning: nameEarning,
            };

            showLoading();
            const responseEditEarning = await CategoryEarning.updateCategoryEarningById(idCategoryEarning, data);
            hideLoading();

            if (responseEditEarning.msg === 'Data updated successfully') {
              alert('Kategori Pemasukan berhasil diubah');
              location.reload();
            } else {
              alert(responseEditEarning.msg);
            }
          }
        });
      });
    });
  },

  _setupButtonDeleteEarning() {
    getAllElement('button[name="btnIconDeleteEarning"]').forEach(async (element) => {
      // Check if earning count < 2
      showLoading();
      const earnings = await CategoryEarning.getAllCategoryEarning();
      hideLoading();

      if (earnings.data.length === 1) {
        element.setAttribute('disabled', '');
      }
      element.addEventListener('click', async () => {
        const buttonId = parseInt(element.id.split('-')[1], 10); // ('deleteEarning-#')
        showLoading();
        const dataEarning = await CategoryEarning.getCategoryEarningById(buttonId);

        const elementBodyDeleteEarning = getElement('body-delete-earning');
        elementBodyDeleteEarning.dataCategoryEarning = dataEarning.result;
        hideLoading();

        this._deleteEarningProcess();
      });
    });
  },

  _deleteEarningProcess() {
    getAllElement('button[name="btnDeleteEarning"]').forEach((element) => {
      element.addEventListener('click', async () => {
        showLoading();
        const idCategoryEarning = parseInt(element.id.split('-')[1], 10); // ('btnDeleteEarning-#')
        const typeCategory = 'earning';
        const responseDeleteCategory = await CategoryEarning.deleteCategoryEarningById(idCategoryEarning, typeCategory);
        hideLoading();

        if (responseDeleteCategory.msg === 'Category Earning berhasil dihapus') {
          alert('Kategori Pemasukan berhasil dihapus');
          location.reload();
        } else {
          alert(responseDeleteCategory.msg);
        }
      });
    });
  },

  _showIconEarning() {
    // Create List Icon
    const elementIconEarningList = getAllElement('.list-icon-earning');
    elementIconEarningList.forEach((element) => {
      this._iconEarnings.forEach((iconEarning) => {
        const itemIconEarning = document.createElement('item-icon');
        itemIconEarning.dataIcon = iconEarning;
        // itemIconEarning.classList.add('m-1');
        element.appendChild(itemIconEarning);
      });
    });

    // Add Event Listener for Item Icon
    getAllElement('.icon-select').forEach((element) => {
      element.addEventListener('click', async () => {
        if (element === document.activeElement) {
          const idIcon = parseInt(element.id.split('-')[1], 10); // ('icon-#')

          // Get Value from Attribute Modal for selection button Pilih Icon 
          getAllElement('.btnChooseIconEarning').forEach((element) => {
            element.addEventListener('click', () => {
              const valueModalTarget = element.getAttribute('data-bs-target')
              if (valueModalTarget === '#tambahKategoriPemasukan') {
                this._setNewIconTambah(idIcon);
              } else if (valueModalTarget === '#editKategoriPemasukan') {
                this._setNewIconEdit(idIcon);
              }
            });
          });
        }
      });
    });
  },

  _setNewIconEdit(id) {
    this._iconEarnings.forEach((iconEarning) => {
      if (iconEarning.id === id) {
        const iconUserSelected = getAllElement('.icon-user-selected-edit');
        iconUserSelected.forEach((element) => {
          if (element.getAttribute('alt') === 'pilih icon earning') {
            element.src = iconEarning.url_icEarning;
            element.id = `iconEarningUserEdit-${iconEarning.id}`;
          }
        });
      }
    });
  },

  _setNewIconTambah(id) {
    this._iconEarnings.forEach((iconEarning) => {
      if (iconEarning.id === id) {
        const iconUserSelected = getAllElement('.icon-user-selected-tambah');
        iconUserSelected.forEach((element) => {
          if (element.getAttribute('alt') === 'pilih icon earning') {
            element.src = iconEarning.url_icEarning;
            element.id = `iconEarningUserTambah-${iconEarning.id}`;
          }
        });
      }
    });
  },
};

export default KelolaEarningInitiator;
