import './index.css';
function Layout(props) {
  return (
    <div className="Layout">
      <div className="Layout_header">
        <div className="Layout_mobile_header">mobile header</div>
        <div className="Layout_header_button_group">
          <button>F</button>
          <button>S</button>
          <button>S</button>
        </div>
      </div>
      <div className="Layout_left_menu">menu</div>
      {props.children}
    </div>
  )
}

export default Layout;
