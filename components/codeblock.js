import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import './vscode.css';
// import "./synthwave.css"
import cn from 'classnames';

const exampleCode = `(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;`;

export default function ({ children, className }) {
  const language = className.replace('language-', '') || '';
  // const filename = title.
  // console.log("found ", className, language)

  return (
    <Highlight {...defaultProps} code={exampleCode} language={language} theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="px-4 -mx-4 overflow-clip sm:overflow-visible">
          <pre className={cn('-mx-6 px-4 my-4 py-4 rounded-xl border border-white/20', className)} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}
