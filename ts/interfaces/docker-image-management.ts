import {DockerImage, ImageOrContainerRemoveResults} from './dockerode';
import {ForceError} from 'firmament-yargs';
export interface DockerImageManagement extends ForceError {
  listImages(listAllImages: boolean,
             cb: (err: Error, images: DockerImage[])=>void);
  getImages(ids: string[],
            cb: (err: Error, images: DockerImage[])=>void);
  getImage(id: string,
           cb: (err: Error, image: DockerImage)=>void);
  removeImages(ids: string[],
               cb: (err: Error, imageRemoveResults: ImageOrContainerRemoveResults[])=>void): void;
  pullImage(imageName: string,
            progressCb: (taskId: string, status: string, current: number, total: number)=>void,
            cb: (err: Error)=>void);
  buildDockerFile(dockerFilePath: string, dockerImageName: string,
                  progressCb: (taskId: string, status: string, current: number, total: number)=>void,
                  cb: (err: Error)=>void);
}

