import * as React from "react";

export function isElementOfType<P = {}>(
  element: any,
  ComponentClass: React.ComponentType<P>,
): element is React.ReactElement<P> {
  return element != null && element.type === React.createElement(ComponentClass).type;
}
