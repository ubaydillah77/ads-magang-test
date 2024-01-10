import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Container,
    Stack,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <AppBar position="static" sx={{ paddingY: "5px" }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{ marginRight: "20px" }}>
                        <Link href={"/"}>
                            <Image
                                className=""
                                src="/ads-logo.png"
                                width={100}
                                height={50}
                                alt="logo"
                            />
                        </Link>
                    </Box>

                    <Box sx={{ marginLeft: "auto" }}>
                        <Stack direction={"row"} gap={3}>
                            <Link href="/">
                                <Typography>Home</Typography>
                            </Link>
                            <Link href="/manage">
                                <Typography>Manage products</Typography>
                            </Link>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
