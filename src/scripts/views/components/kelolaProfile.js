import dompet from './pop-upDompet';
import pemasukan from './pop-upPemasukan';
import pengeluaran from './pop-upPengeluaran';

const kelolaProfile = () => {
  const kelolaList = document.querySelector('section.kelola');
  kelolaList.innerHTML = `
      <h2>Kelola</h2>
      ${pemasukan}
      ${dompet}
      ${pengeluaran}
`;
};

export default kelolaProfile;
