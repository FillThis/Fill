/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

"use client";

import { Provider } from "jotai";
import React from "react";

const JotaiProvider = (props: { children: React.ReactNode }) => {
    return <Provider>{props.children}</Provider>;
};

export default JotaiProvider;
