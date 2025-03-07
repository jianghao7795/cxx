sequential-read: (g=0): rw=read, bs=(R) 1024KiB-1024KiB, (W) 1024KiB-1024KiB, (T) 1024KiB-1024KiB, ioengine=libaio, iodepth=1
fio-3.35
Starting 1 process
sequential-read: Laying out IO file (1 file / 1024MiB)
Jobs: 1 (f=1): [R(1)][100.0%][r=2915MiB/s][r=2914 IOPS][eta 00m:00s]
sequential-read: (groupid=0, jobs=1): err= 0: pid=72459: Wed Feb 26 11:10:50 2025
  read: IOPS=2906, BW=2906MiB/s (3047MB/s)(170GiB/60001msec)
    slat (usec): min=17, max=187, avg=19.01, stdev= 2.45
    clat (usec): min=288, max=1128, avg=324.58, stdev=13.99
     lat (usec): min=320, max=1147, avg=343.58, stdev=14.23
    clat percentiles (usec):
     |  1.00th=[  306],  5.00th=[  310], 10.00th=[  314], 20.00th=[  314],
     | 30.00th=[  318], 40.00th=[  318], 50.00th=[  326], 60.00th=[  326],
     | 70.00th=[  330], 80.00th=[  334], 90.00th=[  343], 95.00th=[  347],
     | 99.00th=[  367], 99.50th=[  383], 99.90th=[  453], 99.95th=[  461],
     | 99.99th=[  490]
   bw (  MiB/s): min= 2846, max= 2932, per=100.00%, avg=2907.11, stdev=12.81, samples=119
   iops        : min= 2846, max= 2932, avg=2907.11, stdev=12.81, samples=119
  lat (usec)   : 500=99.99%, 750=0.01%
  lat (msec)   : 2=0.01%
  cpu          : usr=0.36%, sys=5.51%, ctx=174367, majf=0, minf=267
  IO depths    : 1=100.0%, 2=0.0%, 4=0.0%, 8=0.0%, 16=0.0%, 32=0.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     issued rwts: total=174365,0,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=1

Run status group 0 (all jobs):
   READ: bw=2906MiB/s (3047MB/s), 2906MiB/s-2906MiB/s (3047MB/s-3047MB/s), io=170GiB (183GB), run=60001-60001msec

Disk stats (read/write):
    dm-0: ios=174097/20, merge=0/0, ticks=56774/12, in_queue=56786, util=94.64%, aggrios=348730/22, aggrmerge=0/0, aggrticks=84278/16, aggrin_queue=84297, aggrutil=94.94%
  nvme0n1: ios=348730/22, merge=0/0, ticks=84278/16, in_queue=84297, util=94.94%





random-write: (g=0): rw=randwrite, bs=(R) 4096B-4096B, (W) 4096B-4096B, (T) 4096B-4096B, ioengine=libaio, iodepth=1
fio-3.35
Starting 1 process
random-write: Laying out IO file (1 file / 1024MiB)
Jobs: 1 (f=1): [w(1)][100.0%][w=261MiB/s][w=66.9k IOPS][eta 00m:00s]
random-write: (groupid=0, jobs=1): err= 0: pid=72436: Wed Feb 26 11:09:40 2025
  write: IOPS=65.1k, BW=254MiB/s (267MB/s)(14.9GiB/60001msec); 0 zone resets
    slat (nsec): min=1569, max=43378, avg=2160.25, stdev=830.19
    clat (nsec): min=459, max=6813.5k, avg=12666.60, stdev=4357.20
     lat (usec): min=11, max=6838, avg=14.83, stdev= 4.51
    clat percentiles (nsec):
     |  1.00th=[10816],  5.00th=[10944], 10.00th=[11072], 20.00th=[11072],
     | 30.00th=[11200], 40.00th=[11328], 50.00th=[11456], 60.00th=[11712],
     | 70.00th=[14272], 80.00th=[14656], 90.00th=[14912], 95.00th=[15424],
     | 99.00th=[19584], 99.50th=[23680], 99.90th=[32384], 99.95th=[35072],
     | 99.99th=[41728]
   bw (  KiB/s): min=169824, max=268792, per=100.00%, avg=260440.16, stdev=18692.05, samples=119
   iops        : min=42456, max=67198, avg=65110.10, stdev=4673.06, samples=119
  lat (nsec)   : 500=0.01%, 750=0.01%, 1000=0.01%
  lat (usec)   : 4=0.01%, 10=0.02%, 20=99.06%, 50=0.92%, 100=0.01%
  lat (usec)   : 250=0.01%, 500=0.01%, 750=0.01%, 1000=0.01%
  lat (msec)   : 2=0.01%, 10=0.01%
  cpu          : usr=6.97%, sys=17.54%, ctx=3905983, majf=0, minf=10
  IO depths    : 1=100.0%, 2=0.0%, 4=0.0%, 8=0.0%, 16=0.0%, 32=0.0%, >=64=0.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     issued rwts: total=0,3905972,0,0 short=0,0,0,0 dropped=0,0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=1

Run status group 0 (all jobs):
  WRITE: bw=254MiB/s (267MB/s), 254MiB/s-254MiB/s (267MB/s-267MB/s), io=14.9GiB (16.0GB), run=60001-60001msec

Disk stats (read/write):
    dm-0: ios=0/3899262, merge=0/0, ticks=0/41311, in_queue=41311, util=68.81%, aggrios=0/3906058, aggrmerge=0/7, aggrticks=0/41060, aggrin_queue=41068, aggrutil=66.81%
  nvme0n1: ios=0/3906058, merge=0/7, ticks=0/41060, in_queue=41068, util=66.81%