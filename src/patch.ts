import type { Diff } from 'diff-match-patch'
import { diff_match_patch as DMP } from "diff-match-patch";
import { Patch } from './types';

export function diff(a: string, b: string): Diff[] {
  const differ = new DMP()
  const delta = differ.diff_main(a, b)
  differ.diff_cleanupSemantic(delta)
  return delta
}

export function calculatePatch(diffs: Diff[]): Patch[] {
  const patches: Patch[] = []
  let index = 0
  for (const change of diffs) {
    if (change[0] === 0) {
      index += change[1].length
      continue
    }
    if (change[0] === -1) {
      patches.push({
        type: 'removal',
        from: index + change[1].length,
        length: change[1].length
      })
    }
    if (change[0] === 1) {
      patches.push({
        type: 'insert',
        from: index,
        text: change[1]
      })
      index += change[1].length
    }
  }
  return patches
}

export function applyPatches(input: string, patches: Patch[]) {
  let text = input
  for (const patch of patches) {
    if (patch.type === 'insert') {
      text = text.slice(0, patch.from) + patch.text + text.slice(patch.from)
    }
    else if (patch.type === 'removal') {
      text = text.slice(0, patch.from - patch.length) + text.slice(patch.from)
    }
  }
  return text
}
