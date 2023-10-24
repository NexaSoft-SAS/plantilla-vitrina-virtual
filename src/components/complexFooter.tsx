import data from '../../public/data.json';
import StoreDoubleColumn from '../components/store/storeDoubleColumn';

export default function ComplexFooter() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-12 col-md-4">
            <h5 className="mt-5">Vitrina virtual</h5>
            <p className="text-body text-sm pe-5">Ahora es el momento de ser grandioso y hacer de otros grandiosos. Por ser un color brillante. Por destacar.</p>
          </div>
          <div className="col-12 col-md-8">
            <StoreDoubleColumn title={data.products[1].title}/>
          </div>
          <div className="col-12 mt-5 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-body">
              Copyright © 
              <script>
                document.write(new Date().getFullYear())
              </script>
              &nbsp;by &nbsp;
              <a href="https://www.nexasoft.dev" className="text-dark" target="_blank">Nexasoft SAS</a>.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


