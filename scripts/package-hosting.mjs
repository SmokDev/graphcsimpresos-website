import { spawnSync } from "node:child_process";
import { rmSync } from "node:fs";

rmSync("hosting.zip", { force: true });
// ZIP estándar de .NET, compatible con el Explorador de Windows y cPanel.
const result = spawnSync("powershell.exe", ["-NoProfile", "-Command", `
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$source = Join-Path (Get-Location) 'out'
$destination = Join-Path (Get-Location) 'hosting.zip'
[System.IO.Compression.ZipFile]::CreateFromDirectory($source, $destination)
$archive = [System.IO.Compression.ZipFile]::OpenRead($destination)
try {
  if ($archive.Entries.Count -eq 0) { throw 'El ZIP está vacío.' }
  Write-Output ('ZIP verificado: ' + $archive.Entries.Count + ' archivos.')
} finally { $archive.Dispose() }
`], { stdio: "inherit" });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
console.log("Paquete listo: hosting.zip (extraer directamente en public_html).");
