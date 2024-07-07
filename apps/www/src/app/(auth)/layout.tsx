/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

import React from "react";

const layout = (props: { children: React.ReactNode }) => {
    return (
        <div className="bg-background text-foreground flex h-dvh max-h-full w-full flex-col text-white">
            <main className="h-full w-full">{props.children}</main>
        </div>
    );
};

export default layout;
