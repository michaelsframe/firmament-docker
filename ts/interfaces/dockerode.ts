import {DockerUtilOptions} from './docker-util-options';
import {ForceError} from 'firmament-yargs';
export enum ImageOrContainer{
  Image,
  Container
}
export interface ImageOrContainerRemoveResults {
  msg: string
}
export interface DockerImageOrContainer {
  Id: string,
  Name: string,
  modem: Modem,
  remove(opts: any, callback: (err: Error, obj: any)=>void): void;
  firmamentId: string
}
export interface DockerImage extends DockerImageOrContainer {
  Created: number,
  Labels: any,
  ParentId: string,
  RepoDigests: any,
  RepoTags: string[],
  Size: number,
  VirtualSize: number,
  get(callback: (err: Error, obj: any)=>void): void;
  history(callback: (err: Error, obj: any)=>void): void;
  inspect(callback: (err: Error, obj: any)=>void): void;
  push(opts: any, callback: (err: Error, obj: any)=>void, auth: any): void;
  tag(opts: any, callback: (err: Error, obj: any)=>void): void;
}
export interface DockerContainer extends DockerImageOrContainer {
  Status: string,
  Names: string[],
  start(opts: any, callback: (err: Error, obj: any)=>void): void;
  stop(opts: any, callback: (err: Error, obj: any)=>void): void;
}

export interface Script {
  RelativeWorkingDir: string,
  Command: string,
  Args: string[]
}
export interface ExpressApp {
  GitUrl: string,
  GitSrcBranchName: string,
  StrongLoopBranchName: string,
  StrongLoopServerUrl: string,
  ServiceName: string,
  GitCloneFolder: string,
  ClusterSize: number,
  ServicePort: number,
  DeployExisting: boolean,
  DoBowerInstall: boolean,
  Scripts: Script[],
  EnvironmentVariables: {}
}
export interface Modem {
  ca: any,
  cert: any,
  checkServerIdentity: any,
  host: any,
  key: any,
  port: any,
  protocol: any,
  socketPath: any,
  timeout: any,
  version: any
}

export interface DockerOde extends ForceError {
  listImages(options: any, cb: (err: Error, images: DockerImage[])=>void): void;
  listContainers(options: any, cb: (err: Error, containers: DockerContainer[])=>void): void;
  getContainer(id: string, options?: any): DockerContainer;
  getImage(id: string, options?: any): DockerImage;
  buildImage(tarStream: any, options: any, cb: (err: Error, outputStream: any)=>void);
  createContainer(containerConfig: any, cb: (err: Error, container: DockerContainer)=>void): void;
  pull(imageName: string, cb: (err: Error, outputStream: any)=>void);
}

export interface ContainerConfig {
  name: string,
  Image: string,
  DockerFilePath: string,
  Hostname: string,
  HostConfig: {
    Links: string[],
    PortBindings: {}
  },
  ExpressApps: ExpressApp[]
}
