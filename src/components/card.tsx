import "@qld-gov-au/qgds-web-components/card";

const Cards = () => {
  return (
    <section className="valign qgds">
      <h3>Cards</h3>

      <qgds-card heading="Card title" variant="none" palette="default">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
      </qgds-card>

      <qgds-card heading="Card title" variant="none" palette="soft">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
      </qgds-card>

      <qgds-card heading="Card title" variant="none" palette="muted">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
      </qgds-card>

      <qgds-card heading="Card title" variant="none" palette="bold">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
      </qgds-card>

      <qgds-card heading="Card title" variant="none" palette="deep">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
      </qgds-card>

      <qgds-card action="none" heading="Card title" palette="default">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>

      <qgds-card action="none" heading="Card title" palette="soft">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>

      <qgds-card action="none" heading="Card title" palette="muted">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>

      <qgds-card action="none" heading="Card title" palette="bold">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>

      <qgds-card action="none" heading="Card title" palette="deep">
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>

      <qgds-card
        action="none"
        image-alt="Placeholder image"
        heading="Card title"
        palette="default"
        image-src="https://picsum.photos/id/322/600/400"
      >
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>

      <qgds-card
        action="none"
        image-alt="Placeholder image"
        heading="Card title"
        palette="soft"
        image-src="https://picsum.photos/id/322/600/400"
      >
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>

      <qgds-card
        action="none"
        image-alt="Placeholder image"
        heading="Card title"
        palette="muted"
        image-src="https://picsum.photos/id/322/600/400"
      >
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>

      <qgds-card
        action="none"
        image-alt="Placeholder image"
        heading="Card title"
        palette="bold"
        image-src="https://picsum.photos/id/322/600/400"
      >
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>

      <qgds-card
        action="none"
        image-alt="Placeholder image"
        heading="Card title"
        palette="deep"
        image-src="https://picsum.photos/id/322/600/400"
      >
        <p>
          Card content introducing the topic or story. Short introductions are
          easier to scan.
        </p>
        <div slot="footer-text">Footer text</div>
      </qgds-card>
    </section>
  );
};

export default Cards;
