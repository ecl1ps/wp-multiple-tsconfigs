# wp-multiple-tsconfigs

This is an example WebPack configuration for building TypeScript app with multiple target environments. 
Environments in this case are **regular window scope** and **webworker scope**. 
Web workers don't have access to DOM and other features and this fact should be also respected and enforced by build process.

## Solution
The solution lies in using [multiple exported Webpack configurations](https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations). 
Every configuration is using its own `tsconfig` with `libs` configuration reflection the target environment during build-time.
