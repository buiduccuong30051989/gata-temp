import StyleGuidesPage from ".";

export default function Icons() {
  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Icons</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">React Icon</p>
              <iframe
                src="https://react-icons.github.io/react-icons"
                title="Iframe Example"
                className="border-0 w-full h-[628px] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Icons.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};
