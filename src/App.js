import LoanForm from './components/LoanForm';

function App() {
  const title = 'Loan Project';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        backgroundColor: '#181818',
        color: '#fff',
      }}
    >
      <LoanForm title={title} />
    </div>
  );
}

export default App;
