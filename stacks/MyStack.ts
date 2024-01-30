import { Function, StackContext } from "sst/constructs";

export function API({ stack }: StackContext) {
  const fn = new Function(stack, "API", {
    runtime: "container",
    handler: "src",
    url: true,
  });

  stack.addOutputs({
    URL: fn.url,
  });
}
