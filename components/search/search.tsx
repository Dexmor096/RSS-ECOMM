import styles from './search.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, IconButton } from '@mui/material';

export default function Search() {
  return (
    <TextField
      placeholder="Search ..."
      type="search"
      className={styles.search}
      sx={{
        border: 'none',
        '& fieldset': { border: 'none' },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
