/// <reference types="node" />
import { ForceError } from "./force-error";
export declare enum ImageOrContainer {
    Image = 0,
    Container = 1,
}
export interface ImageRemoveResults {
    msg: string;
}
export interface ContainerRemoveResults {
    msg: string;
}
export interface DockerImageOrContainer {
    Id: string;
    name: string;
    firmamentId: string;
}
export interface DockerImage extends DockerImageOrContainer {
    Created: number;
    Labels: any;
    ParentId: string;
    RepoDigests: any;
    RepoTags: string[];
    Size: number;
    VirtualSize: number;
}
export interface DockerContainer extends DockerImageOrContainer {
    id: string;
    Status: string;
    Names: string[];
}
export interface Script {
    RelativeWorkingDir: string;
    Command: string;
    Args: string[];
}
export interface ExpressApp {
    GitUrl: string;
    GitSrcBranchName: string;
    StrongLoopBranchName: string;
    StrongLoopServerUrl: string;
    ServiceName: string;
    GitCloneFolder: string;
    ClusterSize: number;
    ServicePort: number;
    DeployExisting: boolean;
    DoBowerInstall: boolean;
    Scripts: Script[];
    EnvironmentVariables: {};
}
export interface Modem {
    ca: any;
    cert: any;
    checkServerIdentity: any;
    host: any;
    key: any;
    port: any;
    protocol: any;
    socketPath: any;
    timeout: any;
    version: any;
}
export interface ImageOrContainerObject {
    name: string;
    id: string;
    modem: Modem;
}
export interface ImageObject extends ImageOrContainerObject {
    get(callback: (err: Error, obj: any) => void): void;
    history(callback: (err: Error, obj: any) => void): void;
    inspect(callback: (err: Error, obj: any) => void): void;
    push(opts: any, callback: (err: Error, obj: any) => void, auth: any): void;
    remove(opts: any, callback: (err: Error, obj: any) => void): void;
    tag(opts: any, callback: (err: Error, obj: any) => void): void;
}
export interface ContainerObject extends ImageOrContainerObject {
    start(opts: any, callback: (err: Error, obj: any) => void): void;
    stop(opts: any, callback: (err: Error, obj: any) => void): void;
}
export interface DockerOde extends ForceError {
    listImages(options: any, cb: (err: Error, images: DockerImage[]) => void): void;
    listContainers(options: any, cb: (err: Error, containers: DockerContainer[]) => void): void;
    getContainer(id: string, options?: any): ContainerObject;
    getImage(id: string, options?: any): ImageObject;
    buildImage(tarStream: any, options: any, cb: (err: Error, outputStream: any) => void): any;
    createContainer(containerConfig: any, cb: (err: Error, container: ContainerObject) => void): void;
    pull(imageName: string, cb: (err: Error, outputStream: any) => void): any;
}
export interface ContainerConfig {
    name: string;
    Image: string;
    DockerFilePath: string;
    Hostname: string;
    HostConfig: {
        Links: string[];
        PortBindings: {};
    };
    ExpressApps: ExpressApp[];
}
