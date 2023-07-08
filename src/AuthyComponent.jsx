import React, { useState } from 'react';

export default function ClimateDonor() {

  const [isAuthed, setIsAuthed] = useState(false);
  return (!isAuthed ? <ProtectedRoutes /> && <Passwordpage setIsAuthed={setIsAuthed} /> : <Storefrontcase />)
}
