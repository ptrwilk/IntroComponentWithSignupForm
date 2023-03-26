import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./styles.module.css";

const AdvertComponent = ({ className }: { className?: string }) => {
  return (
    <Box className={classNames(styles["container"], className)}>
      <Typography variant="body1" className={styles["text"]}>
        Try it free 7 days{" "}
        <span className={styles["text-highlight"]}>
          then $20/mo. thereafter
        </span>
      </Typography>
    </Box>
  );
};

export default AdvertComponent;
