/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = (props: { children: React.ReactNode }) => {
    return <SessionProvider>{props.children}</SessionProvider>;
};

export default AuthProvider;
