import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    usia: "",
    tahunLahir: "",
  });

  const handleChange = (e) => {
    setError('')
    if (e.target.name === "name") {
      if (e.target.value.length < 3) {
        setError("Minimal 3 karakter");
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (form.name === '') {
      setError('Field nama tidak boleh kosong')
    }
    else if (form.tahunLahir === "") {
      setError("Field tahun lahir boleh kosong");
    } else {
      setForm({ ...form, usia: 2024 - form.tahunLahir });
    }
  };

  return (
    <>
      <h1>Aplikasi Input Data Diri</h1>
      name:
      <Input
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
      />{" "}
      <br />
      <br />
      tahun lahir:
      <Input
        type="number"
        value={form.tahunLahir}
        name="tahunLahir"
        onChange={handleChange}
      />{" "}
      <br />
      <br />
      <Input
        type="number"
        value={form.tahunLahir}
        onChange={handleChange}
      />{" "}
      <Button onClick={handleSubmit}>Click</Button> <br />
      <p style={{ color: "red" }}>{error}</p>
      <br />
      Usia saya adalah: {form.usia}
    </>
  );
}

export default App;
