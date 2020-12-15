import Nav from './Nav';

function Layout(props) {
  return (
    <div style={{ marginLeft: '20px', fontFamily: 'sans-serif' }}>
      <Nav />
      {props.children}
    </div>
  );
}
export default Layout;
