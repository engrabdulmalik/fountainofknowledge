import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={466}
          py={8}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={30} textDecoration={"none"}>
              {
                /* Add links to Projects and Contact me section */
                <a href="home">Home</a>
              }

              {
                /* Add links to Projects and Contact me section */
                <a href="courses">Courses</a>
              }
              {
                /* Add links to Projects and Contact me section */
                <Link to="/register">Register</Link>
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </>
  );
}

export default NavBar;
