class ItemCategory extends HTMLElement {
  set category(category) {
    this._category = category;
  }

  set chooseTransaction(chooseTransaction) {
    this._chooseTransaction = chooseTransaction;
    this._render();
  }

  _render() {
    const category = this._category;
    const chooseTransaction = this._chooseTransaction;

    this.innerHTML = `
      <div class="d-flex flex-column">
        <div class="rounded-3 overflow-hidden mb-3 card">
          <ul class="list-group list-group-horizontal text-center kategori-list align-items-center justify-content-center">
            <li class="list-group-item flex-fill item" id="${this._idSelector(category, chooseTransaction)}" tabindex="0">
              <img class="icon-list-dashboard" src="${this._urlIconSelector(category)}" alt="logo">
              <p>${this._nameCategorySelector(category)}</p>
            </li>
          </ul>
        </div>
      </div>
    `;
  }

  _idSelector(category, chooseTransaction) {
    if (chooseTransaction === 'Add') {
      if (category.categoryName_earning) {
        return `categoryEarningAdd-${category.id}`;
      } else {
        return `categorySpendingAdd-${category.id}`;
      }
    } else {
      if (category.categoryName_earning) {
        return `categoryEarningEdit-${category.id}`;
      } else {
        return `categorySpendingEdit-${category.id}`;
      }
    }
  }

  _nameCategorySelector(category) {
    if (category.categoryName_earning) {
      return category.categoryName_earning;
    } else {
      return category.categoryName_spending;
    }
  }

  _urlIconSelector(category) {
    if (category.IconEarning) {
      return category.IconEarning.url_icEarning;
    } else {
      return category.IconSpending.url_icSpending;
    }
  }
}

customElements.define('item-category', ItemCategory);
