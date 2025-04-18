"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2542],{3801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"bindings/go","title":"Go","description":"","source":"@site/docs/20-bindings/go.mdx","sourceDirName":"20-bindings","slug":"/bindings/go","permalink":"/bindings/go","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/opendal/tree/main/website/docs/20-bindings/go.mdx","tags":[],"version":"current","lastUpdatedBy":"Xuanwo","lastUpdatedAt":1741601725000,"frontMatter":{"title":"Go"},"sidebar":"docs","previous":{"title":"Dotnet \ud83d\udea7","permalink":"/bindings/dotnet"},"next":{"title":"Haskell \ud83d\udea7","permalink":"/bindings/haskell"}}');var i=t(6070),a=t(5658),r=t(8699);function o(e){const n={a:"a",br:"br",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"apache-opendal-go-binding",children:"Apache OpenDAL\u2122 Go Binding"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/apache/opendal/bindings/go",children:(0,i.jsx)(n.img,{src:"/img/external/6fc9234a805e6983d9cc27a62c8568aa.svg",alt:""})}),"\n",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/apache/opendal/bindings/go",children:(0,i.jsx)(n.img,{src:"/img/external/4079df26a2c75f9863cb3d997d7d1f3d.svg",alt:"Go Reference"})})]}),"\n",(0,i.jsxs)(n.p,{children:["opendal-go is a ",(0,i.jsx)(n.strong,{children:"Native"})," support Go binding without CGO enabled and is built on top of opendal-c."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/apache/opendal/bindings/go@latest\n"})}),"\n",(0,i.jsxs)(n.p,{children:["opendal-go requires ",(0,i.jsx)(n.strong,{children:"libffi"})," to be installed."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/apache/opendal-go-services/memory"\n\topendal "github.com/apache/opendal/bindings/go"\n)\n\nfunc main() {\n\t// Initialize a new in-memory operator\n\top, err := opendal.NewOperator(memory.Scheme, opendal.OperatorOptions{})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tdefer op.Close()\n\n\t// Write data to a file named "test"\n\terr = op.Write("test", []byte("Hello opendal go binding!"))\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// Read data from the file "test"\n\tdata, err := op.Read("test")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Printf("Read content: %s\\n", data)\n\n\t// List all entries under the root directory "/"\n\tlister, err := op.List("/")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tdefer lister.Close()\n\n\t// Iterate through all entries\n\tfor lister.Next() {\n\t\tentry := lister.Entry()\n\n\t\t// Get entry name (not used in this example)\n\t\t_ = entry.Name()\n\n\t\t// Get metadata for the current entry\n\t\tmeta, _ := op.Stat(entry.Path())\n\n\t\t// Print file size\n\t\tfmt.Printf("Size: %d bytes\\n", meta.ContentLength())\n\n\t\t// Print last modified time\n\t\tfmt.Printf("Last modified: %s\\n", meta.LastModified())\n\n\t\t// Check if the entry is a directory or a file\n\t\tfmt.Printf("Is directory: %v, Is file: %v\\n", meta.IsDir(), meta.IsFile())\n\t}\n\n\t// Check for any errors that occurred during iteration\n\tif err := lister.Error(); err != nil {\n\t\tpanic(err)\n\t}\n\n\t// Copy a file\n\top.Copy("test", "test_copy")\n\n\t// Rename a file\n\top.Rename("test", "test_rename")\n\n\t// Delete a file\n\top.Delete("test_rename")\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"run-tests",children:"Run Tests"}),"\n",(0,i.jsx)(n.h3,{id:"behavior-tests",children:"Behavior Tests"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd tests/behavior_tests\n# Test a specific backend\nexport OPENDAL_TEST=memory\n# Run all tests\nCGO_ENABLE=0 go test -v -run TestBehavior\n# Run specific test\nCGO_ENABLE=0 go test -v -run TestBehavior/Write\n# Run synchronously\nCGO_ENABLE=0 GOMAXPROCS=1 go test -v -run TestBehavior\n"})}),"\n",(0,i.jsx)(n.h3,{id:"benchmark",children:"Benchmark"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd tests/behavior_tests\n# Benchmark a specific backend\nexport OPENDAL_TEST=memory\n\ngo test -bench .\n"})}),"\n",(0,i.jsxs)(n.details,{children:["\n  ",(0,i.jsx)(n.summary,{children:"\n  A benchmark between purego+libffi vs CGO\n  "}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/opendal/commit/bf15cecd5e3be6ecaa7056b5594589c9f4d85673",children:(0,i.jsx)(n.strong,{children:"purego+libffi"})})," (as ",(0,i.jsx)(n.code,{children:"new.txt"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"goos: linux\ngoarch: arm64\npkg: github.com/apache/opendal/bindings/go\nBenchmarkWrite4KiB-10            1000000              2844 ns/op\nBenchmarkWrite256KiB-10           163346             10092 ns/op\nBenchmarkWrite4MiB-10              12900             99161 ns/op\nBenchmarkWrite16MiB-10              1785            658210 ns/op\nBenchmarkRead4KiB-10              194529              6387 ns/op\nBenchmarkRead256KiB-10             14228             82704 ns/op\nBenchmarkRead4MiB-10                 981           1227872 ns/op\nBenchmarkRead16MiB-10                328           3617185 ns/op\nPASS\nok\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/opendal/commit/9ef494d6df2e9a13c4e5b9b03bcb36ec30c0a7c0",children:(0,i.jsx)(n.strong,{children:"CGO"})})," (as ",(0,i.jsx)(n.code,{children:"old.txt"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"go test -bench=. -tags dynamic .\ngoos: linux\ngoarch: arm64\npkg: opendal.apache.org/go\nBenchmarkWrite4KiB-10             241981              4240 ns/op\nBenchmarkWrite256KiB-10           126464             10105 ns/op\nBenchmarkWrite4MiB-10              13443             89578 ns/op\nBenchmarkWrite16MiB-10              1737            646155 ns/op\nBenchmarkRead4KiB-10               53535             20939 ns/op\nBenchmarkRead256KiB-10              9008            132738 ns/op\nBenchmarkRead4MiB-10                 576           1846683 ns/op\nBenchmarkRead16MiB-10                230           6305322 ns/op\nPASS\nok\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Diff"})," with ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat",children:"benchstat"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"benchstat old.txt new.txt\ngoos: linux\ngoarch: arm64\npkg: github.com/apache/opendal/bindings/go\n               \u2502   new.txt    \u2502\n               \u2502    sec/op    \u2502\nWrite4KiB-10     2.844\xb5 \xb1 \u221e \xb9\nWrite256KiB-10   10.09\xb5 \xb1 \u221e \xb9\nWrite4MiB-10     99.16\xb5 \xb1 \u221e \xb9\nWrite16MiB-10    658.2\xb5 \xb1 \u221e \xb9\nRead4KiB-10      6.387\xb5 \xb1 \u221e \xb9\nRead256KiB-10    82.70\xb5 \xb1 \u221e \xb9\nRead4MiB-10      1.228m \xb1 \u221e \xb9\nRead16MiB-10     3.617m \xb1 \u221e \xb9\ngeomean          90.23\xb5\n\xb9 need >= 6 samples for confidence interval at level 0.95\n\npkg: opendal.apache.org/go\n               \u2502   old.txt    \u2502\n               \u2502    sec/op    \u2502\nWrite4KiB-10     4.240\xb5 \xb1 \u221e \xb9\nWrite256KiB-10   10.11\xb5 \xb1 \u221e \xb9\nWrite4MiB-10     89.58\xb5 \xb1 \u221e \xb9\nWrite16MiB-10    646.2\xb5 \xb1 \u221e \xb9\nRead4KiB-10      20.94\xb5 \xb1 \u221e \xb9\nRead256KiB-10    132.7\xb5 \xb1 \u221e \xb9\nRead4MiB-10      1.847m \xb1 \u221e \xb9\nRead16MiB-10     6.305m \xb1 \u221e \xb9\ngeomean          129.7\xb5\n\xb9 need >= 6 samples for confidence interval at level 0.95\n"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," OperatorInfo"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Stat\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Metadata"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," IsExist"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Read\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Read"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Reader -- implement as ",(0,i.jsx)(n.code,{children:"io.ReadCloser"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Write\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Write"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Writer -- Need support from the C binding"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Delete"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," CreateDir"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Lister\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Entry"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Metadata -- Need support from the C binding"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Copy"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Rename"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,i.jsx)(n.p,{children:"The guide is based on Linux and Windows. For other platforms, please adjust the commands accordingly."}),"\n",(0,i.jsx)(n.p,{children:"To develop the Go binding, you need to have the following dependencies installed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"zstd"}),"\n",(0,i.jsx)(n.li,{children:"Rust toolchain"}),"\n",(0,i.jsx)(n.li,{children:"Go"}),"\n",(0,i.jsx)(n.li,{children:"(Required for Windows) libffi-8.dll in the root of the workspace directory"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.code,{children:"go workspace"})," to manage and build the dependencies. To set up the workspace, run the following commands:"]}),"\n",(0,i.jsxs)(n.details,{children:["\n  ",(0,i.jsx)(n.summary,{children:"\n  For Linux\n  "}),"\n",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'mkdir opendal_workspace\ncd opendal_workspace\ngit clone --depth 1 git@github.com:apache/opendal.git\ngit clone --depth 1 git@github.com:apache/opendal-go-services.git\n\ngo work init\ngo work use ./opendal/bindings/go\ngo work use ./opendal/bindings/go/tests/behavior_tests\n# use the backend you want to test, e.g., fs or memory\ngo work use ./opendal-go-services/fs\ngo work use ./opendal-go-services/memory\n\ncat <<EOF > ./make_test.sh\n#!/bin/bash\n\n# Check if OPENDAL_TEST is set\nif [ -z "\\$OPENDAL_TEST" ]; then\n    echo "Error: OPENDAL_TEST environment variable is not set"\n    echo "Please set OPENDAL_TEST to specify which backend to test (e.g., fs or memory)"\n    exit 1\nfi\n\n# Specify the backend to test\nexport SERVICE="\\$OPENDAL_TEST"\n\n# Get architecture\narchitecture=\\$(uname -m)\nif [ "\\$architecture" = "x86_64" ]; then\n    ARCH="amd64"\n    GOARCH="amd64"\nelif [ "\\$architecture" = "aarch64" ] || [ "\\$architecture" = "arm64" ]; then\n    ARCH="arm64"\n    GOARCH="arm64"\nelse\n    ARCH="unknown"\nfi\n\n# Build opendal\ncd opendal/bindings/c\ncargo build\ncd -\n\n# Set environment variables\nexport GITHUB_WORKSPACE="\\$PWD/opendal-go-services"\nexport VERSION="latest"\nexport TARGET="linux"\nexport DIR="\\$GITHUB_WORKSPACE/libopendal_c_\\${VERSION}_\\${SERVICE}_\\${TARGET}"\n\n# Create directory if not exists\nmkdir -p "\\$DIR"\n\nexport OUTPUT="\\$DIR/libopendal_c.\\$TARGET.so.zst"\n# Compress with zstd\nzstd -19 opendal/bindings/c/target/debug/libopendal_c.so -o \\$OUTPUT\n\n# Set environment variables for test\nexport MATRIX=\'{"build": [{"target":"linux", "goos":"linux", "goarch": "\'\\$GOARCH\'"}], "service": ["fs"]}\'\n\n# Generate code\ncd opendal-go-services/internal/generate\ngo run generate.go\ncd -\n\n# Delete unnecessary files\nrm -rf \\$DIR\n\n# Run tests\ngo test ./opendal/bindings/go/tests/behavior_tests -v -run TestBehavior\nEOF\n\nchmod +x ./make_test.sh\n\ncd -\n'})}),"\n",(0,i.jsx)(n.p,{children:"To build and run tests, run the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd opendal_workspace\n\n# specify the backend to test\nexport OPENDAL_TEST=fs\nexport OPENDAL_FS_ROOT=/tmp/opendal\n\n# build the C binding and run the tests\n./make_test.sh\n\ncd -\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n  ",(0,i.jsx)(n.summary,{children:"\n  For Windows\n  "}),"\n",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'New-Item -ItemType Directory -Path opendal_workspace\nSet-Location -Path opendal_workspace\n\ngit clone --depth 1 git@github.com:apache/opendal.git\ngit clone --depth 1 git@github.com:apache/opendal-go-services.git\n\ngo work init\ngo work use ./opendal/bindings/go\ngo work use ./opendal/bindings/go/tests/behavior_tests\n# use the backend you want to test, e.g., fs or memory\ngo work use ./opendal-go-services/fs\ngo work use ./opendal-go-services/memory\n\n@\'\n# Check if OPENDAL_TEST is set\\;if (-not $env:OPENDAL_TEST) {\\;    Write-Error "OPENDAL_TEST environment variable is not set"\\;    Write-Host "Please set OPENDAL_TEST to specify which backend to test (e.g., fs or memory)"\\;    exit 1\\;}\\;# Specify the backend to test\\;Set-Item -Path Env:SERVICE -Value "$env:OPENDAL_TEST"\\;# Get architecture\\;$architecture = (Get-WmiObject Win32_OperatingSystem).OSArchitecture\\;\\;if ($architecture -like "*64*") {\\;    $ARCH = "x86_64"\\;} else {\\;    $ARCH = "unknown" \\;}\\;\\;# Build opendal\\;Push-Location opendal/bindings/c\\;cargo build\\;Pop-Location\\;\\;# Rename dll file\\;Rename-Item opendal/bindings/c/target/debug/opendal_c.dll libopendal_c.dll\\;\\;# Set environment variables\\;Set-Item -Path Env:GITHUB_WORKSPACE -Value "$PWD/opendal-go-services"\\;Set-Item -Path Env:VERSION -Value "latest"\\;Set-Item -Path Env:TARGET -Value "windows"\\;Set-Item -Path Env:DIR -Value "$($env:GITHUB_WORKSPACE)/libopendal_c_$($env:VERSION)_$($env:SERVICE)_$($env:TARGET)"\\;\\;if (-not (Test-Path $env:DIR)) {\\;    New-Item -ItemType Directory -Path $env:DIR\\;}\\;\\;# Compress with zstd\\;zstd -19 opendal/bindings/c/target/debug/libopendal_c.dll -o "$($env:DIR)/libopendal_c.windows.dll.zst"\\;\\;Push-Location opendal-go-services/internal/generate\\;go run generate.go\\;Pop-Location\\;# Remove Unnecessary files\\;Remove-Item -Path $env:DIR -Recurse -Force\\;# Set environment variables\\;Set-Item -Path Env:MATRIX -Value \'{"build": [{"target":"windows", "goos":"windows", "goarch": "amd64"}], "service": ["fs"]}\'\\;# Assume that libffi-8.dll is in the root of workspace directory\\;Set-Item -Path Env:PATH -Value "$($env:PATH);$PWD"\\;# Run tests\\;go test ./opendal/bindings/go/tests/behavior_tests -v -run TestBehavior\\;\n\'@ -replace "\\\\;","`n" | Out-File -FilePath "MakeTest.ps1" -Encoding UTF8\n\nPop-Location\n'})}),"\n",(0,i.jsx)(n.p,{children:"To build and run tests, run the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'Set-Location -Path opendal_workspace\n# specify the backend to test\n$env:OPENDAL_TEST = "fs"\n$env:OPENDAL_FS_ROOT = $env:TEMP\n\n# build the C binding and run the tests\n.\\MakeTest.ps1\n\nPop-Location\n'})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"license-and-trademarks",children:"License and Trademarks"}),"\n",(0,i.jsxs)(n.p,{children:["Licensed under the Apache License, Version 2.0: ",(0,i.jsx)(n.a,{href:"http://www.apache.org/licenses/LICENSE-2.0",children:"http://www.apache.org/licenses/LICENSE-2.0"})]}),"\n",(0,i.jsx)(n.p,{children:"Apache OpenDAL, OpenDAL, and Apache are either registered trademarks or trademarks of the Apache Software Foundation."})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}const l={title:"Go"},d=void 0,h={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Run Tests",id:"run-tests",level:2},{value:"Behavior Tests",id:"behavior-tests",level:3},{value:"Benchmark",id:"benchmark",level:3},{value:"Capabilities",id:"capabilities",level:2},{value:"Development",id:"development",level:2},{value:"License and Trademarks",id:"license-and-trademarks",level:2}];function m(e){return(0,i.jsx)(r.A,{basePath:"bindings/go/",children:(0,i.jsx)(c,{components:{h1:"h2"}})})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m()}},8699:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(758),i=t(6070);function a(e){let{children:n,owner:t="apache",repo:a="opendal",branch:r="main",basePath:o="",components:c={}}=e;const l=e=>{const n=e.replace(/^\.\//,"");return`https://github.com/${t}/${a}/blob/${r}/${o}${n}`},d={...c,a:e=>{const{href:n,...t}=e;return n&&n.startsWith("./")?(0,i.jsx)("a",{...t,href:l(n)}):(0,i.jsx)("a",{...e})},p:e=>{const{children:n}=e;if("string"==typeof n){const e=/\[(.*?)\]:\s*(\.\/[^\s]+)/g;if(e.test(n)){const t=n.replace(e,((e,n,t)=>`[${n}]: ${l(t)}`));return(0,i.jsx)("p",{children:t})}}return(0,i.jsx)("p",{...e})}};return"string"==typeof n?(e=>{if("string"!=typeof e)return e;let n=e.replace(/\[(.*?)\]\((\.\/[^)]+)\)/g,((e,n,t)=>`[${n}](${l(t)})`));return n=n.replace(/\[(.*?)\]:\s*(\.\/[^\s]+)/g,((e,n,t)=>`[${n}]: ${l(t)}`)),n})(n):s.isValidElement(n)?s.cloneElement(n,{components:{...n.props.components||{},...d}}):n}},5658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(758);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);