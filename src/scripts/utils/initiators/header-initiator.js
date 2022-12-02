import { getDataLocalStorage, saveDataToLocalStorage } from '../local-storage-utils';

const HeaderInitiator = {
  init({
    dataUser, dompetUser, selectedDompet, element,
  }) {
    this._dataUser = dataUser;
    this._dompetUser = dompetUser;
    this._selectedDompet = selectedDompet;
    this._element = element;

    this._element.dataUser = this._dataUser;
    this._element.selectedDompet = this._selectedDompet;
    this._showDompetList();
  },

  _showDompetList() {
    const elementDompetList = document.querySelector('#dompetListHeader');
    elementDompetList.innerHTML = '';
    this._dompetUser.forEach((dompet) => {
      const dompetItemHeader = document.createElement('item-wallet-header');
      dompetItemHeader.dataDompet = dompet;
      elementDompetList.appendChild(dompetItemHeader);
    });
    this._dompetUser.forEach((dompet) => {
      if (dompet.id === getDataLocalStorage().dompet_id) {
        document.querySelector(`#dompet-${dompet.id}`).setAttribute('checked', '');
      }
    });
    document.querySelectorAll('input[name="radio-dompet"]').forEach((element) => {
      element.addEventListener('click', () => {
        const radioId = parseInt(element.id.split('-')[1], 10); // get id from dompet id ('dompet-#')
        saveDataToLocalStorage(radioId, getDataLocalStorage().token);
        location.reload();
      });
    });
  },
};

export default HeaderInitiator;
