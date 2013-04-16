Node Robot

一些开发注明

1. 必须使用对应的nodejs版本。当前0.5.0版本对应nodejs版本为0.8.17
2. 必须使用nw-gyp而不是node-gyp编译。
3. 编译node-ffi步骤：
   npm install -g node-gyp
   npm install -g nw-gyp
   git clone ...(node-fii)
   nw configure
   nw build
   cd node_modules/ref/
   nw configure
   nw build
   (注意在ffi根目录下build是不会同时build依赖的ref模块。需要build两次。)