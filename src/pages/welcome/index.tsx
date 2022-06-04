import './style.less';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1 className="title">Webpack React</h1>
      <span>This is a template for react + typescript.</span>
      <div className="links">
        <p>
          <a href="https://react.docschina.org/">React</a> |
          <a href="https://reactrouter.com/">React-Router</a>
        </p>
        <p>
          <a href="https://www.typescriptlang.org/">Typescript</a> |
          <a href="http://lesscss.org/">Less</a>
        </p>
        <p>
          <a href="https://eslint.org/">Eslint</a> |
          <a href="https://www.npmjs.com/package/eslint-config-ali">Eslint-Config-Ali</a>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
