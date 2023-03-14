import ReactPageScroller from 'react-page-scroller';

export default function App() {
  return (
    <ReactPageScroller>
      <div style={{ height: '100%', backgroundColor: 'red' }}></div>
      <div style={{ height: '100%', backgroundColor: 'green' }}></div>
      <div
        style={{ height: '200%', backgroundColor: 'blue', overflow: 'scroll' }}
      ></div>
    </ReactPageScroller>
  );
}
