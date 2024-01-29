#!/bin/bash

COMPONENT_NAME=$1

if [ -z "$COMPONENT_NAME" ]; then
    echo "Error: Please specify a component name"
    exit 1
fi

mkdir -p "src/components/$COMPONENT_NAME"

COMP_PROP=$COMPONENT_NAME"Props"

# Create Comp.tsx
cat <<EOF >"src/components/$COMPONENT_NAME/$COMPONENT_NAME.tsx"
// $COMPONENT_NAME.tsx
import type { FC } from 'react';

interface $COMP_PROP {
	// Property content here
	props: any;
}

export const $COMPONENT_NAME: FC<$COMP_PROP> = (props) => {
    return (
        <div>
            {/* Component content here */}
        </div>
    );
};

export default $COMPONENT_NAME;
EOF

echo "Component $COMPONENT_NAME created successfully."
