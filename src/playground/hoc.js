import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>{props.info} about your bank statement</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>These are some private info. please donot share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};
const requireauthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>you are not authenticated</p>}
      <p>Do not share with anyone!</p>
    </div>
  )
}
const AdminInfo = withAdminWarning(Info);
const AuthoInfo = requireauthentication(Info);
ReactDOM.render(<AuthoInfo isAuthenticated={true} info="There are some information" />, document.getElementById('App'));