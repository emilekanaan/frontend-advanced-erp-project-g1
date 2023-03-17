import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import cookie from "react-cookies";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SingleSelectPlaceholderRole(props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState("");
  const [names, setNames] = React.useState([]);

  React.useEffect(() => {
    let token = cookie.load("access_token");
    axios
      .get(`${process.env.REACT_APP_URL}/role`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setNames(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
    const data = [names.find((name) => name.role === value).id];
    props.onChildData(data);
    console.log(data);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1.5,
          width: "91%",
          mt: 3,
          "& .MuiOutlinedInput-root": {
            color: "white",
            "& fieldset": {
              borderColor: "white",
            },
          },
        }}
      >
        <Select
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <em>Role</em>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Role</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name.id}
              value={name.role}
              style={getStyles(name.role, personName, theme)}
            >
              {name.role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
