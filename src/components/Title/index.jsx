import { Container, Image } from 'react-bootstrap';

function Title() {
    return (
      <Container className="d-flex flex-column align-items-center">
        <Image
          src="https://media.frag-den-staat.de/files/media/main/07/78/0778dfc7-e475-4c41-b5ab-afc9bd089d9e/spahn.jpg"
          width={250}
          height={250}
          className="mx-auto rounded-circle object-fit-cover"
        />
        <h1 className="fs-1 mt-3 fw-bold mx-auto">
          Verteile Spahns 3,1 Milliarden
        </h1>
        <div className="fs-5 text-center mt-2 mb-4">
          3,1 Milliarden Euro – <a href="https://fragdenstaat.de/artikel/exklusiv/2025/06/spahn-brh/" target="_blank" rel="noopener noreferrer">so viel hat Jens Spahn laut Bundesrechnungshof planlos verpulvert</a>.
          <br />
          Was würdest du mit dem Geld machen? Verteil’s besser!
        </div>
      </Container>
    );
}

export default Title;