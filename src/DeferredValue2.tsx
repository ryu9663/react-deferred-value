import { useState, useDeferredValue, useMemo } from "react";
import styled from "styled-components";
const TestWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TestChild = styled.div<{ color: string }>`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
`;
const DeferredValue2 = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const boxes = useMemo(() => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
    return (
      <TestWrapper>
        {new Array(10000).fill(null).map((_, i) => {
          const x = Math.floor(Math.random() * 256);
          const y = Math.floor(Math.random() * 256);
          const z = Math.floor(Math.random() * 256);
          const backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
          return (
            <div key={i} style={{ width: 100, height: 100, backgroundColor }} />
          );
        })}

        <TestChild color={backgroundColor} />
      </TestWrapper>
    );
  }, [deferredText]);

  return (
    <div>
      <h2>Concurrent Mode</h2>
      <p>현재 Text: {text}</p>
      <p>현재 deferredText: {deferredText}</p>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {boxes}
    </div>
  );
};

export default DeferredValue2;

const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  width: 240px;
  margin-bottom: 40px;
  padding: 0 16px;
  font-size: 16px;
`;
