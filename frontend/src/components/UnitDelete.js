import React from "react";

const UnitDelete = () => {
  const [submit, setSubmit] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
  });

  const { id } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onDelete = () => async () => {
    const res = await axios
      .delete("http://127.0.0.1:8000/unit/", {
        unit: {
          id,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Wrap>
        <form>
          <Container>
            <div>
              <label htmlFor="id">Selet ID to Delete</label>
              <input
                id="id"
                type="text"
                name="id"
                onChange={(e) => onChange(e)}
                value={id}
              ></input>
            </div>
            <div show={submit}>
              <label></label>
              <FirstButton
                type="submit"
                name="Submit"
                id="submit"
                disabled="disabled"
                onClick={onSubmit(false)}
              >
                Submit
              </FirstButton>
            </div>
          </Container>
        </form>
      </Wrap>
    </div>
  );
};

export default UnitDelete;
