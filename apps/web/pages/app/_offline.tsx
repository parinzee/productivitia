/* 
Since we aim to have offline support 
we will simply import the normal index component.
*/
import * as React from "react";
import Startpage from ".";

export default function Offline() {
  return (
    <>
      <Startpage />
    </>
  );
}
