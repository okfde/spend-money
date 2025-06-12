import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import formatMoney from "../../helpers/formatMoney";

function Receipt() {
  const items = useSelector((state) => state.product.items);
  const filtered = items.filter((item) => item.count > 0);
  let spendMoney = 0;
  
  filtered.forEach((item) => {
    spendMoney += item.productPrice * item.count;
  });

  if (filtered.length === 0) {
    return null;
  }

  return (
    <section
      className="mt-4 mb-5"
      aria-labelledby="receipt-heading"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <h3 id="receipt-heading" className="fs-2 fw-bold mb-4">Deine Quittung</h3>

            <div role="table" aria-label="Gekaufte Produkte">
              <div role="rowgroup">
                <div role="row" className="visually-hidden">
                  <span role="columnheader">Produktname</span>
                  <span role="columnheader">Anzahl</span>
                  <span role="columnheader">Preis</span>
                </div>

                {filtered.map((item) => (
                  <div role="row" key={item.id} className="row py-2">
                    <div role="cell" className="col-6 text-start px-0">
                      <span className="fs-6">{item.productName}</span>
                    </div>
                    <div role="cell" className="col-2 text-start text-nowrap ps-2">
                      <span aria-label={`${item.count} Stück`}>× {item.count}</span>
                    </div>
                    <div role="cell" className="col-4 text-end px-0">
                      <span className="text-primary" aria-label={`Kosten: ${formatMoney(item.productPrice * item.count)}`}>
                        {formatMoney(item.productPrice * item.count)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div role="row" className="row mt-4 pt-3 border-top" aria-label="Gesamtsumme">
                <div role="cell" className="col-6 text-start px-0">
                  <strong className="fs-5 fw-bold">Summe</strong>
                </div>
                <div role="cell" className="col-6 text-end px-0">
                  <span
                    className="text-primary fs-5 fw-bold"
                    aria-live="polite"
                    aria-label={`Gesamtbetrag: ${formatMoney(spendMoney)}`}
                  >
                    {formatMoney(spendMoney)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Receipt;
