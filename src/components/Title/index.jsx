import { Container, Image } from 'react-bootstrap';

function Title() {
    return (
      <Container className="d-flex flex-column align-items-center">
        <Image
          src="https://media.frag-den-staat.de/files/media/main/49/dd/49dd4b08-fab7-41c6-9b7a-a1531a5a6417/spahn.png"
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
          Verteile Spahns Milliarden
        </h1>
      </Container>
    );
}

export default Title;