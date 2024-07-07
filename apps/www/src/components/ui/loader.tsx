/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

import React from "react";

export const Loader = () => {
    return (
        <span className="relative mr-4 flex items-center justify-center">
            <span className="bg-foreground absolute inline-flex h-5 w-5 animate-ping rounded-full"></span>
            <span className="bg-foreground relative inline-flex h-4 w-4 rounded-full"></span>
        </span>
    );
};
