import { Box, Typography } from "@mui/material";
import AdvertComponent from "../Advert/AdvertComponent";
import FormComponent from "../Form/FormComponent";
import styles from "./styles.module.css";

const IntroWithSignUpFormComponent = () => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["section-1"]}>
        <Typography variant="h1" className={styles["title"]}>
          Learn to code by
          <br /> watching others
        </Typography>
        <Typography variant="body1" className={styles["text"]}>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </Typography>
      </Box>
      <Box className={styles["section-2"]}>
        <AdvertComponent className={styles["advert-component"]} />
        <FormComponent />
      </Box>
    </Box>
  );
};

export default IntroWithSignUpFormComponent;
