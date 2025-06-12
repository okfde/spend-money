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
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
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
                    <div role="cell" className="col-4 col-sm-5 text-start px-0" style={{ hyphens: "none" }}>
                      <span className="fs-6" title={item.productName}>
                        {item.productName}
                      </span>
                    </div>
                    <div role="cell" className="col-3 col-sm-2 tabular-numbers text-start text-nowrap ps-3">
                      <span aria-label={`${item.count} Stück`} className="fs-6">× {item.count}</span>
                    </div>
                    <div role="cell" className="col-5 tabular-numbers text-end px-0">
                      <span
                        className="text-primary"
                        aria-label={`Kosten: ${formatMoney(item.productPrice * item.count, true)}`}
                        style={{ fontSize: "calc(0.85rem + 0.15vw)" }}
                      >
                        {formatMoney(item.productPrice * item.count, true)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div role="row" className="row mt-3 pt-3 border-top" aria-label="Gesamtsumme">
                <div role="cell" className="col-6 text-start px-0">
                  <strong className="fs-6 fw-bold">Summe</strong>
                </div>
                <div role="cell" className="col-6 tabular-numbers text-end px-0">
                  <span
                    className="text-primary fw-bold"
                    aria-live="polite"
                    aria-label={`Gesamtbetrag: ${formatMoney(spendMoney, true)}`}
                    style={{ fontSize: "calc(0.85rem + 0.15vw)" }}
                  >
                    {formatMoney(spendMoney, true)}
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
