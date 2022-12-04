import CONFIG from '../../../globals/config';
import CategorySpending from '../../../services/api/categorySpending';
import { getElement, getAllElement } from '../../element';

const KelolaSpendingInitiator = {
  init({
    dataUser, categorySpendings, iconSpendings,
  }) {
    this._dataUser = dataUser;
    this._categorySpendings = categorySpendings;
    this._iconSpendings = iconSpendings;

    this._showCategorySpendingList();
    this._showIconSpending();
  },

  _showCategorySpendingList() {
    try {
      // Create component item Category Spending
      const elementSpendingList = getElement('#list-category-spending');
      elementSpendingList.innerHTML = '';
      this._categorySpendings.forEach((spending) => {
        const spendingItemKelola = document.createElement('item-spending-kelola');
        spendingItemKelola.dataCategorySpending = spending;
        elementSpendingList.appendChild(spendingItemKelola);
      });

      this._setupButtonTambahSpending()

      this._setupButtonEditSpending();

      this._setupButtonDeleteSpending();
    } catch (error) {
      console.log(error);
    }
  },

  _setupButtonTambahSpending() {
    getElement('.add-spending').addEventListener('click', () => {
      const elementsIconSelected = getAllElement('.icon-user-selected-tambah');
      elementsIconSelected.forEach((element) => {
        if (element.getAttribute('alt') === 'pilih icon spending') {
          element.id = 'iconSpendingUser';

          if (element.id === 'iconSpendingUser') {
            element.src = CONFIG.IMAGE_LOGO_PATH;
          }

          this._tambahSpendingProcess(element);
        }
      });
    });
  },


  _tambahSpendingProcess(element) {
    getElement('#btnTambahSpending').addEventListener('click', async () => {
      const nameSpending = getElement('#inputNameSpendingTambah').value;

      if (nameSpending === '') {
        alert('Nama Spending harus diisi');
        return false;
      }

      let idIcon;
      if (element.id === 'iconSpendingUser') {
        idIcon = 1;
      } else {
        idIcon = parseInt(element.id.split('-')[1], 10);
      }

      const data = {
        icSpendingId: idIcon,
        categoryNameSpending: nameSpending,
      };

      const responseTambahSpending = await CategorySpending.createCategorySpending(data);

      if (responseTambahSpending.status === 'success') {
        alert('Spending berhasil dibuat');
        location.reload();
      } else {
        alert(responseTambahSpending.msg);
      }
    });
  },

  _setupButtonEditSpending() {
    // Set data Spending to field
    getAllElement('button[name="btnIconEditSpending"]').forEach((element) => {
      element.addEventListener('click', async () => {
        const buttonId = parseInt(element.id.split('-')[1], 10); // ('editSpending-#')
        const dataSpending = await CategorySpending.getCategorySpendingById(buttonId);

        const elementBodyEditSpending = getElement('body-edit-spending');
        elementBodyEditSpending.dataCategorySpending = dataSpending.result;

        this._editSpendingProcess();
      });
    });
  },

  _editSpendingProcess() {
    // save data Spending to server
    getAllElement('button[name="btnEditSpending"]').forEach((element) => {

      element.addEventListener('click', async () => {
        const elementIconSelected = getAllElement('.icon-user-selected-edit');

        elementIconSelected.forEach(async (elementIcon) => {
          if (elementIcon.getAttribute('alt') === 'pilih icon spending') {
            const idCategorySpending = parseInt(element.id.split('-')[1], 10); // ('btnEditSpending-#')

            const idIcon = parseInt(elementIcon.id.split('-')[1], 10);
            const nameSpending = getElement('#inputNameSpendingEdit').value;

            const data = {
              icSpendingId: idIcon,
              categoryNameSpending: nameSpending,
            };

            const responseEditSpending = await CategorySpending.updateCategorySpendingById(idCategorySpending, data);

            if (responseEditSpending.msg === 'Data updated successfully') {
              alert('Kategori Pengeluaran berhasil diubah');
              location.reload();
            } else {
              alert(responseEditSpending.msg);
            }
          }
        });
      });
    });
  },

  _setupButtonDeleteSpending() {
    getAllElement('button[name="btnIconDeleteSpending"]').forEach(async (element) => {
      // Check if spending count < 2
      const spendings = await CategorySpending.getAllCategorySpending();
      if (spendings.data.length === 1) {
        element.setAttribute('disabled', '');
      }
      element.addEventListener('click', async () => {
        const buttonId = parseInt(element.id.split('-')[1], 10); // ('deleteSpending-#')
        const dataSpending = await CategorySpending.getCategorySpendingById(buttonId);
        console.log(dataSpending);
        const elementBodyDeleteSpending = getElement('body-delete-spending');
        elementBodyDeleteSpending.dataCategorySpending = dataSpending.result;

        this._deleteSpendingProcess();
      });
    });
  },

  _deleteSpendingProcess() {
    getAllElement('button[name="btnDeleteSpending"]').forEach((element) => {
      element.addEventListener('click', async () => {
        const idCategorySpending = parseInt(element.id.split('-')[1], 10); // ('btnDeleteSpending-#')
        const typeCategory = 'spending';
        const responseDeleteCategory = await CategorySpending.deleteCategorySpendingById(idCategorySpending, typeCategory);

        if (responseDeleteCategory.msg === 'Category Spending berhasil dihapus') {
          alert('Kategori Pengeluaran berhasil dihapus');
          location.reload();
        } else {
          alert(responseDeleteCategory.msg);
        }
      });
    });
  },

  _showIconSpending() {
    // Create List Icon
    const elementIconSpendingList = getAllElement('.list-icon-spending');
    elementIconSpendingList.forEach((element) => {
      this._iconSpendings.forEach((iconSpending) => {
        const itemIconSpending = document.createElement('item-icon');
        itemIconSpending.dataIcon = iconSpending;
        // itemIconSpending.classList.add('m-1');
        element.appendChild(itemIconSpending);
      });
    });

    // Add Event Listener for Item Icon
    getAllElement('.icon-select').forEach((element) => {
      element.addEventListener('click', async () => {
        if (element === document.activeElement) {
          const idIcon = parseInt(element.id.split('-')[1], 10); // ('icon-#')

          // Get Value from Attribute Modal for selection button Pilih Icon 
          getAllElement('.btnChooseIconSpending').forEach((element) => {
            element.addEventListener('click', () => {
              const valueModalTarget = element.getAttribute('data-bs-target')
              if (valueModalTarget === '#tambahKategoriPengeluaran') {
                this._setNewIconTambah(idIcon);
              } else if (valueModalTarget === '#editKategoriPengeluaran') {
                this._setNewIconEdit(idIcon);
              }
            });
          });
        }
      });
    });
  },

  _setNewIconEdit(id) {
    this._iconSpendings.forEach((iconSpending) => {
      if (iconSpending.id === id) {
        const iconUserSelected = getAllElement('.icon-user-selected-edit');
        iconUserSelected.forEach((element) => {
          if (element.getAttribute('alt') === 'pilih icon spending') {
            element.src = iconSpending.url_icSpending;
            element.id = `iconSpendingUserEdit-${iconSpending.id}`;
          }
        });
      }
    });
  },

  _setNewIconTambah(id) {
    this._iconSpendings.forEach((iconSpending) => {
      if (iconSpending.id === id) {
        const iconUserSelected = getAllElement('.icon-user-selected-tambah');
        iconUserSelected.forEach((element) => {
          if (element.getAttribute('alt') === 'pilih icon spending') {
            element.src = iconSpending.url_icSpending;
            element.id = `iconSpendingUserTambah-${iconSpending.id}`;
          }
        });
      }
    });
  },
};

export default KelolaSpendingInitiator;