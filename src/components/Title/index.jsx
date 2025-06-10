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
      </Container>
    );
}

export default Title;