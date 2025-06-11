import { Container, Image } from 'react-bootstrap';

function Title() {
    return (
      <header className="d-flex flex-column align-items-center">
        <Image
          src="https://media.frag-den-staat.de/files/media/main/07/78/0778dfc7-e475-4c41-b5ab-afc9bd089d9e/spahn.jpg"
          width={250}
          height={250}
          className="mx-auto rounded-circle object-fit-cover"
          loading="lazy"
        />
        <h1 id="main-title" className="fs-1 mt-3 fw-bold mx-auto">
          Verteile Spahns 3,1 Milliarden
        </h1>
        <p className="fs-5 text-center mt-2 mb-4">
          3,1 Milliarden Euro – <a
            href="https://fragdenstaat.de/artikel/exklusiv/2025/06/spahn-brh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Artikel lesen: So viel hat Jens Spahn laut Bundesrechnungshof planlos verpulvert"
          >
            so viel hat Jens Spahn laut Bundesrechnungshof planlos verpulvert
          </a>.
          <br />
          Was würdest du mit dem Geld machen? Verteil's besser – die Quittung bekommst du zum Schluss.
        </p>
        <div
          id="app-description"
          className="visually-hidden"
        >
          Diese Anwendung ermöglicht es dir, virtuell 3,1 Milliarden Euro zu verteilen.
          Wähle Produkte aus dem Katalog und sieh dir ganz unten deine Quittung an.
        </div>
      </header>
    );
}

export default Title;