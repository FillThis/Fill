/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

import React from "react";

const FormHeader = (props: { formName: string; formDesc: string }) => {
    return (
        <section className="bg-foreground/10 rounded-2xl p-12">
            <h1 className="text-[2rem]">{props.formName}</h1>
            {/* <span className="block my-4 w-24 h-[1px] rounded-full bg-muted-foreground"></span> */}
            <p className="text-muted-foreground mt-2">{props.formDesc}</p>
        </section>
    );
};

export default FormHeader;
