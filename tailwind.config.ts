import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        counter: "counter 0.75s ease-in ",
        wave1: "wave1 2s linear infinite",
        wave2: "wave2 2s linear infinite",
        wave3: "wave3 2s linear infinite",
      },
      keyframes: {
        counter: {
          "0%": {
            opacity: "0",
            transform: "translateY(-15px)",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(-24px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-40px)",
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        wave1: {
          "0%": {
            d: "path('M0 685L21.5 698.3C43 711.7 86 738.3 128.8 747.8C171.7 757.3 214.3 749.7 257.2 737.5C300 725.3 343 708.7 385.8 707.3C428.7 706 471.3 720 514.2 725.5C557 731 600 728 642.8 720C685.7 712 728.3 699 771.2 690C814 681 857 676 878.5 673.5L900 671L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          "25%": {
            d: "path('M0 735L21.5 738.3C43 741.7 86 748.3 128.8 748.8C171.7 749.3 214.3 743.7 257.2 731.2C300 718.7 343 699.3 385.8 690.7C428.7 682 471.3 684 514.2 692.5C557 701 600 716 642.8 718.5C685.7 721 728.3 711 771.2 706.3C814 701.7 857 702.3 878.5 702.7L900 703L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          "50%": {
            d: "path('M0 761L21.5 753.2C43 745.3 86 729.7 128.8 721.2C171.7 712.7 214.3 711.3 257.2 714.5C300 717.7 343 725.3 385.8 729.5C428.7 733.7 471.3 734.3 514.2 735.2C557 736 600 737 642.8 741.2C685.7 745.3 728.3 752.7 771.2 745.8C814 739 857 718 878.5 707.5L900 697L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          "75%": {
            d: "path('M0 735L21.5 738.3C43 741.7 86 748.3 128.8 748.8C171.7 749.3 214.3 743.7 257.2 731.2C300 718.7 343 699.3 385.8 690.7C428.7 682 471.3 684 514.2 692.5C557 701 600 716 642.8 718.5C685.7 721 728.3 711 771.2 706.3C814 701.7 857 702.3 878.5 702.7L900 703L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          to: {
            d: "path('M0 685L21.5 698.3C43 711.7 86 738.3 128.8 747.8C171.7 757.3 214.3 749.7 257.2 737.5C300 725.3 343 708.7 385.8 707.3C428.7 706 471.3 720 514.2 725.5C557 731 600 728 642.8 720C685.7 712 728.3 699 771.2 690C814 681 857 676 878.5 673.5L900 671L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
        },
        wave2: {
          "0%": {
            d: "path('M0 737L21.5 748.7C43 760.3 86 783.7 128.8 794C171.7 804.3 214.3 801.7 257.2 797.5C300 793.3 343 787.7 385.8 784.7C428.7 781.7 471.3 781.3 514.2 783C557 784.7 600 788.3 642.8 787.5C685.7 786.7 728.3 781.3 771.2 776.5C814 771.7 857 767.3 878.5 765.2L900 763L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          "25%": {
            d: "path('M0 723L21.5 728.2C43 733.3 86 743.7 128.8 755.5C171.7 767.3 214.3 780.7 257.2 791.7C300 802.7 343 811.3 385.8 804.7C428.7 798 471.3 776 514.2 762.2C557 748.3 600 742.7 642.8 744.2C685.7 745.7 728.3 754.3 771.2 756.3C814 758.3 857 753.7 878.5 751.3L900 749L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          "50%": {
            d: "path('M0 819L21.5 808C43 797 86 775 128.8 771.3C171.7 767.7 214.3 782.3 257.2 788.7C300 795 343 793 385.8 786.2C428.7 779.3 471.3 767.7 514.2 770.3C557 773 600 790 642.8 786.2C685.7 782.3 728.3 757.7 771.2 753.7C814 749.7 857 766.3 878.5 774.7L900 783L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          "75%": {
            d: "path('M0 723L21.5 728.2C43 733.3 86 743.7 128.8 755.5C171.7 767.3 214.3 780.7 257.2 791.7C300 802.7 343 811.3 385.8 804.7C428.7 798 471.3 776 514.2 762.2C557 748.3 600 742.7 642.8 744.2C685.7 745.7 728.3 754.3 771.2 756.3C814 758.3 857 753.7 878.5 751.3L900 749L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          to: {
            d: "path('M0 737L21.5 748.7C43 760.3 86 783.7 128.8 794C171.7 804.3 214.3 801.7 257.2 797.5C300 793.3 343 787.7 385.8 784.7C428.7 781.7 471.3 781.3 514.2 783C557 784.7 600 788.3 642.8 787.5C685.7 786.7 728.3 781.3 771.2 776.5C814 771.7 857 767.3 878.5 765.2L900 763L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
        },
        wave3: {
          "0%": {
            d: "path('M0 789L21.5 801.2C43 813.3 86 837.7 128.8 848.3C171.7 859 214.3 856 257.2 852C300 848 343 843 385.8 832C428.7 821 471.3 804 514.2 802.5C557 801 600 815 642.8 827.3C685.7 839.7 728.3 850.3 771.2 854.8C814 859.3 857 857.7 878.5 856.8L900 856L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          "25%": {
            d: "path('M0 872L21.5 868.3C43 864.7 86 857.3 128.8 851.5C171.7 845.7 214.3 841.3 257.2 838.8C300 836.3 343 835.7 385.8 841.2C428.7 846.7 471.3 858.3 514.2 859.7C557 861 600 852 642.8 844C685.7 836 728.3 829 771.2 824.2C814 819.3 857 816.7 878.5 815.3L900 814L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          "50%": {
            d: "path('M0 847L21.5 849.3C43 851.7 86 856.3 128.8 854.7C171.7 853 214.3 845 257.2 835.5C300 826 343 815 385.8 818.5C428.7 822 471.3 840 514.2 841.2C557 842.3 600 826.7 642.8 818.5C685.7 810.3 728.3 809.7 771.2 807.5C814 805.3 857 801.7 878.5 799.8L900 798L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          "75%": {
            d: "path('M0 872L21.5 868.3C43 864.7 86 857.3 128.8 851.5C171.7 845.7 214.3 841.3 257.2 838.8C300 836.3 343 835.7 385.8 841.2C428.7 846.7 471.3 858.3 514.2 859.7C557 861 600 852 642.8 844C685.7 836 728.3 829 771.2 824.2C814 819.3 857 816.7 878.5 815.3L900 814L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
          to: {
            d: "path('M0 789L21.5 801.2C43 813.3 86 837.7 128.8 848.3C171.7 859 214.3 856 257.2 852C300 848 343 843 385.8 832C428.7 821 471.3 804 514.2 802.5C557 801 600 815 642.8 827.3C685.7 839.7 728.3 850.3 771.2 854.8C814 859.3 857 857.7 878.5 856.8L900 856L900 901L878.5 901C857 901 814 901 771.2 901C728.3 901 685.7 901 642.8 901C600 901 557 901 514.2 901C471.3 901 428.7 901 385.8 901C343 901 300 901 257.2 901C214.3 901 171.7 901 128.8 901C86 901 43 901 21.5 901L0 901Z')",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
