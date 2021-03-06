export class DockerDescriptors {
  static dockerContainerConfigTemplate = [
    {
      name: 'mongo',
      Image: 'mongo:2.6',
      DockerFilePath: 'docker/mongo/2.6',
      Hostname: 'mongo',
      HostConfig: {}
    },
    {
      name: 'firmament-test-server',
      Image: 'jreeme/strong-pm:node-5',
      DockerFilePath: 'docker/strong-pm',
      Hostname: 'firmament-test-server',
      HostConfig: {
        Links: ['mongo:mongo'],
        PortBindings: {
          '3001/tcp': [{HostPort: '4001'}],
          '8701/tcp': [{HostPort: '8701'}]
        }
      },
      ExpressApps: [
        {
          GitUrl: 'https://github.com/jreeme/FirmamentTestServer',
          GitSrcBranchName: 'master',
          StrongLoopBranchName: 'deploy',
          StrongLoopServerUrl: 'http://localhost:8701',
          ServiceName: 'FirmamentTestServer'
        }
      ]
    },
    {
      name: 'firmament-test-app',
      Image: 'jreeme/strong-pm:node-5',
      DockerFilePath: 'docker/strong-pm',
      Hostname: 'firmament-test-app',
      HostConfig: {
        Links: ['firmament-test-server:firmament-test-server'],
        PortBindings: {
          '3001/tcp': [{HostPort: '3001'}],
          '3002/tcp': [{HostPort: '3002'}],
          '3003/tcp': [{HostPort: '3003'}],
          '8701/tcp': [{HostPort: '8702'}]
        }
      },
      ExpressApps: [
        {
          GitUrl: 'https://github.com/jreeme/FirmamentTestApp',
          GitSrcBranchName: 'master',
          StrongLoopBranchName: 'deploy',
          StrongLoopServerUrl: 'http://localhost:8702',
          ServiceName: 'FirmamentTestApp',
          DoBowerInstall: true,
          ClusterSize: 1,
          EnvironmentVariables: {
            PORT: 8080,
            NODE_ENV: 'production'
          },
          Scripts: [
            {
              StopDeployOnFailure: false,
              RelativeWorkingDir: '.',
              Command: '/bin/sh',
              Args: [
                'ls',
                '-F',
                '-a',
                '-l'
              ]
            }
          ]
        }
      ]
    }
  ];
  static dockerContainerDefaultDescriptor =
    {
      "Hostname": "",
      "Domainname": "",
      "User": "",
      "AttachStdin": false,
      "AttachStdout": true,
      "AttachStderr": true,
      "Tty": false,
      "OpenStdin": false,
      "StdinOnce": false,
      "Env": [
        "FOO=bar"
      ],
      "Cmd": [],
      "Entrypoint": "",
      "Image": "ubuntu",
      "Labels": {
        "com.example.vendor": "Acme",
        "com.example.license": "GPL",
        "com.example.version": "1.0"
      },
      "Mounts": [
        {
          "Name": "fac362...80535",
          "Source": "/data",
          "Destination": "/data",
          "Driver": "local",
          "Mode": "ro,Z",
          "RW": false,
          "Propagation": ""
        }
      ],
      "WorkingDir": "",
      "NetworkDisabled": false,
      "MacAddress": "12:34:56:78:9a:bc",
      "ExposedPorts": {
        "22/tcp": {}
      },
      "StopSignal": "SIGTERM",
      "HostConfig": {
        "Binds": ["/tmp:/tmp"],
        "Links": ["redis3:redis"],
        "Memory": 0,
        "MemorySwap": 0,
        "MemoryReservation": 0,
        "KernelMemory": 0,
        "CpuShares": 512,
        "CpuPeriod": 100000,
        "CpuQuota": 50000,
        "CpusetCpus": "0,1",
        "CpusetMems": "0,1",
        "BlkioWeight": 300,
        "BlkioWeightDevice": [{}],
        "BlkioDeviceReadBps": [{}],
        "BlkioDeviceReadIOps": [{}],
        "BlkioDeviceWriteBps": [{}],
        "BlkioDeviceWriteIOps": [{}],
        "MemorySwappiness": 60,
        "OomKillDisable": false,
        "OomScoreAdj": 500,
        "PortBindings": {"22/tcp": [{"HostPort": "11022"}]},
        "PublishAllPorts": false,
        "Privileged": false,
        "ReadonlyRootfs": false,
        "Dns": ["8.8.8.8"],
        "DnsOptions": [""],
        "DnsSearch": [""],
        "ExtraHosts": null,
        "VolumesFrom": ["parent", "other:ro"],
        "CapAdd": ["NET_ADMIN"],
        "CapDrop": ["MKNOD"],
        "GroupAdd": ["newgroup"],
        "RestartPolicy": {"Name": "", "MaximumRetryCount": 0},
        "NetworkMode": "bridge",
        "Devices": [],
        "Ulimits": [{}],
        "LogConfig": {"Type": "json-file", "Config": {}},
        "SecurityOpt": [""],
        "CgroupParent": "",
        "VolumeDriver": "",
        "ShmSize": 67108864
      }
    };
  /*  {

   Image: '',
   Hostname: '',
   DomainName: '',
   User: '',
   AttachStdin: false,
   AttachStdout: true,
   AttachStderr: true,
   Tty: true,
   OpenStdin: false,
   StdinOnce: false,
   Env: ['ENV0=how now brown cow', 'ENV1=320'],
   Cmd: [],
   Entrypoint: '',
   Labels: {
   'version': '1.0'
   },
   Volumes: {
   '/tmp': {}
   },
   WorkingDir: '',
   NetworkDisabled: false,
   MacAddress: '',
   ExposedPorts: {
   //'22/tcp': {}
   },
   SecurityOpts: [''],
   HostConfig: {
   Binds: null,
   BindsExample: ['/tmp:/tmp'],
   Links: null,
   LinksExample: ['redis:redis'],
   LxcConf: {'lxc.utsname': 'docker'},
   Memory: 0,
   MemorySwap: 0,
   CpuShares: 512,
   CpusetCpus: null,
   PortBindings: null,
   PortBindingsExample: {'22/tcp': [{'HostPort': '11022'}]},
   PublishAllPorts: false,
   Privileged: false,
   ReadonlyRootfs: false,
   Dns: null,
   DnsExample: ['8.8.8.8', '9.9.9.9'],
   DnsSearch: null,
   ExtraHosts: null,
   ExtraHostsExample: ['localhost:127.0.0.1'],
   VolumesFrom: null,
   VolumesFromExample: ['containerName[:<ro|rw>]'],
   CapAdd: ['NET_ADMIN'],
   CapDrop: ['MKNOD'],
   RestartPolicy: {'Name': '', 'MaximumRetryCount': 0},
   RestartPolicyExample: {'Name': '<always|on-failure>', 'MaximumRetryCount': 0},
   NetworkMode: 'bridge',
   Devices: null,
   Ulimits: null,
   LogConfig: {'Type': 'json-file', Config: {}},
   CgroupParent: ''
   }
   }*/
  static dockerContainerDefaultTemplate = [
    DockerDescriptors.dockerContainerDefaultDescriptor
  ];
}
