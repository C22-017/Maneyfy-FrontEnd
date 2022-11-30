import CONFIG from '../../globals/config';

class ChooseMonth extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <section>
    <div class="container d-flex  mt-5 menu-bulan">
      <div class="container d-flex justify-content-star pilih-bulan">
        <h1>Pilih Bulan</h1>
      </div>
      <div>
              <select placeholder="Pilih Bulan">
              <option name="" value="" style="display:none;">MM</option>
              <option name="January" value="Jan">January</option>
              <option name="February" value="Feb">February</option>
              <option name="March" value="Mar">March</option>
              <option name="April" value="Apr">April</option>
              <option name="May" value="May">May</option>
              <option name="June" value="Jun">June</option>
              <option name="July" value="Jul">July</option>
              <option name="August" value="Aug">August</option>
              <option name="September" value="Sep">September</option>
              <option name="October" value="Oct">October</option>
              <option name="November" value="Nov">November</option>
              <option name="December" value="Dec">December</option>
            </select>
      </div>
      
    </div>
    </section>
  `;
  }
}

customElements.define('choose-month', ChooseMonth);
