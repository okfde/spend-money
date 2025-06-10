import { Container, Image } from 'react-bootstrap';

function Title() {
    return (
      <Container className="d-flex flex-column align-items-center">
        <Image
          src="https://media.frag-den-staat.de/files/media/main/07/78/0778dfc7-e475-4c41-b5ab-afc9bd089d9e/spahn.jpg"
          width={250}
          height={250}
          className="mx-auto rounded-circle"
          style={{ objectFit: 'cover' }}
        />
        <h1
          style={{
            fontSize: '40px',
            marginTop: '1rem',
            fontWeight: 700
          }}
          className="mx-auto"
        >
          Verteile Spahns 3,1 Milliarden
        </h1>
      </Container>
    );
}

export default Title;