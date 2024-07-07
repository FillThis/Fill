/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

import React from "react";

const OrSeperator = () => {
    return (
        <div
            id="or-text"
            className="text-foreground flex items-center justify-center gap-x-4 text-center opacity-50"
        >
            <span className="bg-foreground h-[1px] w-32"></span>
            or
            <span className="bg-foreground h-[1px] w-32"></span>
        </div>
    );
};

export default OrSeperator;
